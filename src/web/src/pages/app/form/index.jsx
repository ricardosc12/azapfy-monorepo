import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Framer from '@/components/layouts/Framer';

const Form =  dynamic(() => import('@/components/organismos/App/Form'), {
    suspense: true,
});

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Framer><Form/></Framer>
        </Suspense>
    )
}

Page.nav = true