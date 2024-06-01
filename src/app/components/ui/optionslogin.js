import GoogleIcon from '@/app/components/ui/assets/google';
import AppleIcon from '@/app/components/ui/assets/apple';

export default function Button({ type }) {
    return (
        <a href="/" className="flex items-center justify-center gap-2 h-[44px]  w-[348px] border-2 ">
            {type === "google" ? (
                <>
                    <GoogleIcon/>
                    <p>Continuar con Google</p>
                </>
            ) : (
                <>
                    <AppleIcon/>
                    <p>Continuar con Apple</p>
                </>
            )}
        </a>
    );
}