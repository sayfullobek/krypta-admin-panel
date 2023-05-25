import toast from "react-hot-toast";

export const success = (text) => toast.success(text)
export const error = (text) => toast.error(text)
export const promise = (saveSettings, settings, text) => {
    toast.promise(
        // saveSettings(settings),
        {
            loading: 'saqlanyapti...',
            success: <b>{text}!</b>,
            error: <b>xatolik yuz berdi.</b>,
        }
    ).then(r => r);
}

export const multiLine = (text) => {
    toast(
        text,
        {
            duration: 6000,
        }
    );
}

export const emoji = (text) => {
    toast(text, {
        icon: '👏',
    });
}