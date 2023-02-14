import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Framer from '@/components/layouts/Framer';

const Modal =  dynamic(() => import('@/components/organismos/App/Modal'), {
    suspense: true,
});

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Modal/>
        </Suspense>
    )
}

Page.nav = true