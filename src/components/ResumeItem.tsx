import { FC } from 'react';
import { Typography, } from 'antd';
import ResumeItemType from '../types/ResumeItem';
const { Title } = Typography;
const ResumeItem: FC<ResumeItemType> = (props: ResumeItemType) => {
    return (
        <div>
            {
                props.description.map((x) => {
                    if (x.type == "header") {
                        return <Title level={5} >{x.text}</Title>
                    }
                    if (x.type == "title") {
                        return <div className='description-title'>{x.text}</div>
                    }
                    if (x.type == "detail") {
                        return <div className='description-detail'>{x.text}</div>
                    }
                })
            }
        </div>
    )
}
export default ResumeItem;