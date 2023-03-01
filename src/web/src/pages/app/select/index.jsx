import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Framer from '@/components/layouts/Framer';

const Select =  dynamic(() => import('@/components/organismos/App/Select'), {
    suspense: true,
});

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Framer><Select/></Framer>
        </Suspense>
    )
}

Page.nav = true