import { Upload, Button } from 'antd';
import { UploadOutLined } from '@ant-design/icons';
import React from 'react';

function ArtilceUploader(props) {
  return (
    <Upload>
      <Button>
        <UploadOutLined>
        </UploadOutLined>
        点击上传
      </Button>
    </Upload>
  );
};

