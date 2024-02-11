import { createBoard } from '@wixc3/react-board';
import { Footer } from '../../../components/footer/footer';

export default createBoard({
    name: 'Footer',
    Board: () => (
        <div style={{ width: '100vw' }}>
            <Footer />
        </div>
    ),
    isSnippet: true,
    environmentProps: {
        canvasHeight: 141,
        canvasWidth: 1112,
        windowWidth: 976,
    },
});
