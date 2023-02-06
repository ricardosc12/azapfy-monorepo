import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Framer from '@/components/layouts/Framer';

const Store =  dynamic(() => import('@/components/organismos/App/Store'), {
    suspense: true,
});

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Framer><Store/></Framer>
        </Suspense>
    )
}

Page.nav = true