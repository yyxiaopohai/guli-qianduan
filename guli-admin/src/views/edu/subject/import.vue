<template>
  <div class="app-container">
    <el-form label-width="120px">
      <el-form-item label="信息描述">
        <el-tag type="info">excel模版说明</el-tag>
        <el-tag>
          <i class="el-icon-download"/>
          <a :href="defaultExcelTemplate">点击下载模版</a>
        </el-tag>

      </el-form-item>

      <el-form-item label="选择Excel">
        <el-upload
          ref="upload"
          :auto-upload="false"
          :on-exceed="fileUploadExceed"
          :on-success="fileUploadSuccess"
          :on-error="fileUploadError"
          :limit="1"
          action="http://127.0.0.1:8110/admin/edu/subject/import"
          name="file"
          accept="application/vnd.ms-excel">
          <el-button
            slot="trigger"
            size="small"
            type="primary">选取文件</el-button>
          <el-button
            :disabled="importBtnDisabled"
            style="margin-left: 10px;"
            size="small"
            type="success"
            @click="submitUpload">导入</el-button>
        </el-upload>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      defaultExcelTemplate: process.env.OSS_PATH + '/excel/课程分类列表.xls', // 默认Excel模板
      importBtnDisabled: false // 导入按钮是否禁用
    }
  },
  methods: {
    fileUploadExceed(files, fileList) {
      console.log('files', files)
      console.log('fileList', fileList)
      this.$message.warning('只能上传一个文件，请删除之后再上传')
    },
    fileUploadSuccess(response) {
      console.log('fileUploadSuccess')
      this.$message({
        type: 'success',
        message: response.message
      })
      this.importBtnDisabled = false
      this.$refs.upload.clearFiles()
    },
    fileUploadError(response) {
      console.log('fileUploadError')
      this.$message({
        type: 'error',
        message: response.message
      })
      this.importBtnDisabled = false
    },
    submitUpload() {
      this.$refs.upload.submit()

      this.importBtnDisabled = true
    }
  }
}
</script>
