package com.nativemodulesdemo;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.events.RCTEventEmitter;
import com.kienht.bubblepicker.BubblePickerListener;
import com.kienht.bubblepicker.adapter.BubblePickerAdapter;
import com.kienht.bubblepicker.model.PickerItem;
import com.kienht.bubblepicker.rendering.BubblePicker;

import java.util.Map;

public class BubblePickerViewManager extends SimpleViewManager<BubblePicker> implements BubblePickerAdapter {

    private String[] items = {};

    @NonNull
    @Override
    public String getName() {
        return "BubblePicker";
    }

    @NonNull
    @Override
    protected BubblePicker createViewInstance(@NonNull ThemedReactContext reactContext) {
        BubblePicker view = new BubblePicker(reactContext, null);
        view.setBubbleSize(1);
        view.setCenterImmediately(true);
        view.setAlwaysSelected(false);
        view.setListener(new BubblePickerListener() {
            @Override
            public void onBubbleSelected(@NonNull PickerItem item) {
                WritableMap event = Arguments.createMap();
                event.putString("title", item.getTitle());
                reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(view.getId(), "onBubbleSelected", event);
            }

            @Override
            public void onBubbleDeselected(@NonNull PickerItem item) {
                WritableMap event = Arguments.createMap();
                event.putString("title", item.getTitle());
                reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(view.getId(), "onBubbleDeselected", event);
            }
        });
        return view;
    }

    @Nullable
    @Override
    public Map getExportedCustomBubblingEventTypeConstants() {
        return MapBuilder.builder()
                .put(
                        "onBubbleSelected",
                        MapBuilder.of(
                                "phasedRegistrationNames",
                                MapBuilder.of("bubbled", "onBubbleSelected")))
                .put(
                        "onBubbleDeselected",
                        MapBuilder.of(
                                "phasedRegistrationNames",
                                MapBuilder.of("bubbled", "onBubbleDeselected")))
                .build();
    }

    @ReactProp(name = "items")
    public void setItems(BubblePicker view, @Nullable ReadableArray sources) {
        items = sources.toArrayList().toArray(new String[0]);
        view.setAdapter(this);
    }

    @Override
    public int getTotalCount() {
        return items.length;
    }

    @Override
    public PickerItem getItem(int i) {
        String title = items[i];
        PickerItem item = new PickerItem();
        item.setTitle(title);
        return item;
    }
}
