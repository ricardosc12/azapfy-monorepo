import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Framer from '@/components/layouts/Framer';

const Info =  dynamic(() => import('@/components/organismos/App/Info'), {
    suspense: true,
});

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Framer><Info/></Framer>
        </Suspense>
    )
}

Page.nav = true