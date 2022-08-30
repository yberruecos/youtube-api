import {describe,expect,test,beforeEach,vi} from 'vitest'
import {screen,render} from '@testing-library/react'
import Layout from './layout';
import mockYtData from '../../mocks/mockYtData.json'

describe('Layout test',()=>{
    test('Render data from endpoint mock',()=>{
        beforeEach(() => {
            vi.mock('../../hooks/useGetData', () => {
                return {
                    default: ()=> {
                        return {
                            error:null,
                            loading:null,
                            data:mockYtData
                        }
                    }
                }
            })
        });

        const {container} = render(<Layout></Layout>)
        const videoCard=container.getElementsByTagName('article');
        expect(videoCard.length).toBe(5)
    })
})