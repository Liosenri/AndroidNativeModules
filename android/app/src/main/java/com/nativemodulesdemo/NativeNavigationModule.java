package com.nativemodulesdemo;

import android.app.Activity;
import android.content.Intent;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableNativeMap;

public class NativeNavigationModule extends ReactContextBaseJavaModule implements ActivityEventListener {

    private static final String E_ACTIVITY_DOES_NOT_EXIST = "E_ACTIVITY_DOES_NOT_EXIST";
    private static final String FACILED_TO_SHOW_LOGIN_SCREEN = "FACILED_TO_SHOW_LOGIN_SCREEN";
    private static final int LOGIN_UI_REQUEST = 2;

    private Promise loginPromise;

    NativeNavigationModule(ReactApplicationContext context) {
        super(context);
        context.addActivityEventListener(this);
    }


    @NonNull
    @Override
    public String getName() {
        return "NativeNavigationModule";
    }


    @ReactMethod
    public void showLoginActivity(final Promise promise) {
        Activity currentActivity = getCurrentActivity();

        if (currentActivity == null) {
            promise.reject(E_ACTIVITY_DOES_NOT_EXIST, "Activity doesn't exist");
            return;
        }
        loginPromise = promise;
        try {
            Intent i = new Intent(getReactApplicationContext(), LoginActivity.class);
            currentActivity.startActivityForResult(i,LOGIN_UI_REQUEST);
        } catch (Exception e) {
            loginPromise.reject(FACILED_TO_SHOW_LOGIN_SCREEN, e);
            loginPromise = null;
        }
    }

    @Override
    public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {

        if(data != null) {
            String username = data.getStringExtra("username");
            String password = data.getStringExtra("password");

            WritableNativeMap nativeData = new WritableNativeMap();
            nativeData.putString("username", username);
            nativeData.putString("password", password);

            if (loginPromise != null) {
                loginPromise.resolve(nativeData);
            }
        }
        loginPromise = null;
    }

    @Override
    public void onNewIntent(Intent intent) {

    }
}
