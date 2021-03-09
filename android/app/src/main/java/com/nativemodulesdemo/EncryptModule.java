package com.nativemodulesdemo;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class EncryptModule extends ReactContextBaseJavaModule {

    EncryptModule(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "EncryptModule";
    }

    @ReactMethod
    public void encryptText(String text, Callback onFailure, Callback onSuccess) {
        CryptUtil cutil = new CryptUtil();
        try {
            String encryptedText = cutil.encrypt(text);
            onSuccess.invoke(encryptedText);
        } catch (Exception e) {
            onFailure.invoke(e);
        }
    }

    @ReactMethod
    public void encryptTextPromise(String text, Promise promise) {
        CryptUtil cutil = new CryptUtil();
        try {
            String encryptedText = cutil.encrypt(text);
            promise.resolve(encryptedText);
        } catch (Exception e) {
            promise.reject(e);
        }
    }

}
