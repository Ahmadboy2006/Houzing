import React, { useState, useEffect } from 'react';
import { Container, Content, Th, ActionBox, Edit, DeleteBox, Delete, Save } from './style';
import Footer from '../Footer';
import MyPropCard from '../MyPropCard';
import Data from '../Data/dataMyProp.js';

function MyProps() {

  const [width, setWidth] = useState(window.innerWidth);

  const [state, setState] = useState({
    width1: '48',
    width2: '',
    width3: '12',
    width4: '10',
    width5: '10'
  });

  const [data, setData] = useState(Data)

  const [tempData, setTempData] = useState({});

  const [editIndex, setEditIndex] = useState(null)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    if (width < 1150) {
      setState({
        width1: '40',
        width2: '20',
        width3: '10',
        width4: '8',
        width5: '8'
      });
    };

    if (width < 1100) {
      setState({
        width1: '35',
        width2: '20',
        width3: '9',
        width4: '3',
        width5: '1'
      });
    };

    if (width < 1000) {
      setState({
        width1: '30',
        width2: '18',
        width3: '9',
        width4: '7',
        width5: '1'
      });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width]);

  const onEdit = (index) => {
    setTempData(data[index])
    setEditIndex(index);
  }

  const onTyping = (e) => {
    const { name, value } = e.target;
    setTempData(prevState => ({
      ...prevState,
      [name]: value
    }))
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  const onSave = () => {
    setData(prevState => prevState.map((item, i) =>
      i === editIndex ? tempData : item
    ));
    setEditIndex(null)
  };

  const onDelete = (id) => {
    setData( prevState => prevState.filter(item => item.id !== id));
  };

  return (
    <Container>
      <Content>
        <Content.Header>
          <Content.Header.Title>My properties</Content.Header.Title>
          <Content.Header.Search main className='w550' placeholder='Search' />
        </Content.Header>
        <Content.Main>
          <Content.Main.Table>
            <thead>
              <Th width={state.width1 + '%'}>Listing Title</Th>
              <Th className='w900' width={state.width2 + '%'}>Date Published</Th>
              <Th className='w900' width={state.width3 + '%'}>Status</Th>
              <Th className='w900' width={state.width4 + '%'}>View</Th>
              <Th className='w550' width={state.width5 + '%'}>Action</Th>
            </thead>
            <tbody>
              {data.map((value, index) => {
                return (
                  <tr key={index}>
                    <td className='relative'>
                      <MyPropCard tempDatas={tempData} onTyping={onTyping} edit={editIndex === index} data={value} />
                      {width < 550 &&
                        <ActionBox absolute>
                          {editIndex === index ? <Save onClick={onSave} /> : <Edit onClick={() => onEdit(index)} />}
                          <DeleteBox><Delete onClick={() => onDelete(value.id)} /></DeleteBox>
                        </ActionBox >}
                    </td>
                    <td className='w900'>
                      {editIndex === index ? <Content.Header.Search min name='date' value={tempData.date} onChange={(e) => onTyping(e, index)} /> : <p className='info'>{value.date}</p>}
                    </td>
                    <td className='w900'>
                      {editIndex === index ? <Content.Header.Search min name='status' value={tempData.status} onChange={(e) => onTyping(e, index)} /> : <p className='info'>{value.status}</p>}
                    </td>
                    <td className='w900'><p className='info'>{value.view}</p></td>
                    <td className='w550'>
                      <ActionBox>
                        {editIndex === index ? <Save onClick={onSave} /> : <Edit onClick={() => onEdit(index)} />}
                        <DeleteBox><Delete onClick={() => onDelete(value.id)} /></DeleteBox>
                      </ActionBox>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </Content.Main.Table>
        </Content.Main>
      </Content>
      <Footer />
    </Container>
  )
}

export default MyProps;
