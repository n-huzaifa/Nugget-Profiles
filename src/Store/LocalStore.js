export function SetLocalValue(key, selected) {
    localStorage.setItem(key, selected)
}

export function GetLocalValue(key) {
    return localStorage.getItem(key)
}

