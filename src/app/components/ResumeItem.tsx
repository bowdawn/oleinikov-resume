import React, { FC } from 'react';
import { Typography, } from 'antd';
import ResumeItemType from '../../core/types/ResumeItem';
const { Title } = Typography;
const ResumeItem: FC<ResumeItemType> = (props: ResumeItemType) => {
    return (
        <div>
            {
                props.description.map((x: any, key: number) => {
                    if (x.type == "header") {
                        return <Title level={5} key={key} >{x.text}</Title>
                    }
                    if (x.type == "title") {
                        return <div key={key} className='description-title'>{x.text}</div>
                    }
                    if (x.type == "detail") {
                        return <div  key={key} className='description-detail'>{x.text}</div>
                    } else {
                        return <></>
                    }
                })
            }
        </div>
    )
}
export default ResumeItem;