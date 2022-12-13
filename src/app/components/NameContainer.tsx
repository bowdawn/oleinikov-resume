import React,{ FC} from 'react';
import { Typography, } from 'antd';
import Resume from '../../core/types/Resume';
import resume_en from '../../core/static/resume_en';
import resume_kr from '../../core/static/resume_kr';

const { Title, Text } = Typography;
const NameContainer: FC<{type: Resume["type"]}> = (props: {type: Resume["type"]}) => {
    const level = props.type == "En" ? 1 : 2; 
    const korean_subheader =  props.type == "Kr" ? <Text type='secondary'>(국문: {resume_kr.last + resume_kr.first})</Text> : null;
    {
        return(
        <>
        <Title level={level}>
                  <div className='first-name'>{resume_en.first}</div>
                  <div className='last-name'>{resume_en.last}</div>
        </Title>
        {korean_subheader}
        </>
    )} 
   
}
export default NameContainer;