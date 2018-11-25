declare const com: any;

export function sendCrashLog(exception: any /* java.lang.Exception */): void {
  if (isCrashlyticsAvailable()) {
    com.crashlytics.android.Crashlytics.logException(exception);
  }
}

export function log(priority: number, tag: string, msg: string): void {
  if (isCrashlyticsAvailable()) {
    com.crashlytics.android.Crashlytics.log(priority, tag, msg);
  }
}

export function setString(key: string, value: string): void {
  if (isCrashlyticsAvailable()) {
    com.crashlytics.android.Crashlytics.setString(key, value);
  }
}

export function setBool(key: string, value: boolean): void {
  if (isCrashlyticsAvailable()) {
    com.crashlytics.android.Crashlytics.setBool(key, value);
  }
}

export function setFloat(key: string, value: number): void {
  if (isCrashlyticsAvailable()) {
    com.crashlytics.android.Crashlytics.setFloat(key, value);
  }
}

export function setInt(key: string, value: number): void {
  if (isCrashlyticsAvailable()) {
    com.crashlytics.android.Crashlytics.setInt(key, value);
  }
}

export function setDouble(key: string, value: number): void {
  if (isCrashlyticsAvailable()) {
    com.crashlytics.android.Crashlytics.setDouble(key, value);
  }
}

export function setUserId(id: string): void {
  if (isCrashlyticsAvailable()) {
    com.crashlytics.android.Crashlytics.setUserIdentifier(id);
  }
}

function isCrashlyticsAvailable(): boolean {
  if (typeof (com.crashlytics) === "undefined" || typeof (com.crashlytics.android.Crashlytics) === "undefined") {
    console.log("Add 'crashlytics: true' to firebase.nativescript.json and remove the platforms folder");
    return false;
  }
  return true;
}