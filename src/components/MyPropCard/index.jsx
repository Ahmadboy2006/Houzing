import React, { useEffect, useState } from 'react';
import { Container, ImgBox, Image, Content, ForSale, Featured } from './style';
import { Content as Contents } from '../MyProperties/style';

function MyPropCard({ data, edit, onTyping, tempDatas }) {

    const [editIndex, setEditIndex] = useState(null);
    const [tempData, setTempData] = useState({});

    useEffect(() => {
        setEditIndex(edit);
        setTempData(tempDatas)
    }, [edit, tempDatas]);

    return (
        <Container>
            <ImgBox>
                <Image src='' />
                <Featured>FEATURED</Featured>
            </ImgBox>
            <Content>
                <div>
                    {editIndex ? (
                        <>
                            <Contents.Header.Search
                                name='title'
                                value={tempData.title}
                                onChange={onTyping}
                                placeholder='House name'
                            />
                            <Contents.Header.Search
                                name='adress'
                                value={tempData.adress}
                                onChange={onTyping}
                                placeholder='Adress'
                            />
                        </>
                    ) : (
                        <>
                            <p className='subTitle'>{data.title}</p>
                            <p className='info'>{data.adress}</p>
                        </>
                    )}
                </div>
                <div>
                    {editIndex ? (
                        <>
                            <Contents.Header.Search
                                name='oldprice'
                                value={tempData.oldprice}
                                onChange={onTyping}
                                placeholder='OldPrice'
                            />
                            <Contents.Header.Search
                                name='newprice'
                                value={tempData.newprice}
                                onChange={onTyping}
                                placeholder='NewPrice'
                            />
                        </>
                    ) : (
                        <>
                            <p className='info'>${data.oldprice}/mo</p>
                            <p className='subTitle'>${data.newprice}/mo</p>
                        </>
                    )}
                </div>
            </Content>
            <ForSale>FOR SALE</ForSale>
        </Container>
    );
}

export default MyPropCard;
