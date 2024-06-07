import Ic from '@/app/components/ui/assets/ic.js'
export default function newcompany({onclick, key}) {
    return (
        <div onClick={onclick} key={key} className="flex justify-center  items-center bg-slate-200 w-[220px] h-[120px]">
            <Ic color={"#000"}/>
        </div>
    );
}
