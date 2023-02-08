import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Framer from '@/components/layouts/Framer';

const Dashboard =  dynamic(() => import('@/components/organismos/App/Dashboard/Create'), {
    suspense: true,
});

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Framer><Dashboard/></Framer>
        </Suspense>
    )
}

Page.nav = true