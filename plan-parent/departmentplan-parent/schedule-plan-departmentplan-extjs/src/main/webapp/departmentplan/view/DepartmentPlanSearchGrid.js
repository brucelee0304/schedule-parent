/**
 * 个人计划表格
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.plan.departmentplan.view.DepartmentPlanSearchGrid', {
  extend: 'kalix.view.components.common.BaseGrid',
  requires: [
    'kalix.plan.departmentplan.controller.DepartmentPlanGridController',
    'kalix.plan.departmentplan.store.DepartmentPlanStore',
    'kalix.schedule.scheduleDict.component.ScheduleDictGridColumn'
  ],
  alias: 'widget.departmentplansearchGrid',
  xtype: 'departmentplansearchGridPanel',
  controller: {
    type: 'departmentplanGridController',
    cfgForm: 'kalix.plan.departmentplan.view.DepartmentPlanWindow',
    cfgViewForm: 'kalix.plan.departmentplan.view.DepartmentPlanViewWindow',
    cfgModel: 'kalix.plan.departmentplan.model.DepartmentPlanModel'
  },
  store: {
    type: 'departmentplanStore',
    proxyUrl: CONFIG.restRoot + '/camel/rest/departmentplansearchs'
  },
  viewConfig:{
    getRowClass:function(){
      return 'custom-grid-row';
    }
  },
  autoLoad: false,

  columns: [
    {
      xtype: 'rownumberer',
    },
    {
      text: '编号',
      dataIndex: 'id',
      hidden: true
    },
    {
      text: '用户ID',
      dataIndex: 'userId',
      hidden: true
    },
    {
      text: '部门id',
      dataIndex: 'orgId',
      hidden: true
    },
    {
      text: '部门code',
      dataIndex: 'orgCode',
      hidden: true
    },
    {
      text: '部门名称',
      dataIndex: 'orgName'
    },
    {
      text:'头像',
      xtype:'templatecolumn',
      tpl:'<img src="http://test" onerror="this.src=\'resources/images/default_user.png\'"/>',
      renderer:null,
    },
    {
      text: '用户名称',
      dataIndex: 'userName'
    },
    {
      text: '标题',
      dataIndex: 'title'
    },
    {
      text: '内容',
      dataIndex: 'content',
      hidden: true
    },
    {
      text: '计划类型',
      xtype: 'scheduleDictGridColumn',
      dictType: '部门计划类型',
      dataIndex: 'planType', renderer: null
    },
    {
      text: '计划状态',
      xtype: 'scheduleDictGridColumn',
      dictType: '部门计划状态',
      dataIndex: 'state', renderer: null
    },
    {
      text: '开始日期',
      dataIndex: 'beginDate',
      xtype: 'datecolumn',
      format: 'Y-m-d', renderer: null
    },
    {
      text: '结束日期',
      dataIndex: 'endDate',
      xtype: 'datecolumn',
      format: 'Y-m-d', renderer: null
    },
    {
      text: '创建日期',
      dataIndex: 'creationDate'
    },
    {
      text: '最近更新',
      dataIndex: 'updateDate'
    },
    {
      xtype: 'securityGridColumnCommon',
      //todo change permission
      verifyItems: [
        {
          iconCls: "iconfont icon-view-column",
          permission: 'view',
          tooltip: '查看',
          handler: 'onView'
        },
        {
          iconCls: 'iconfont icon-attachment-column',
          permission: 'attachement',
          tooltip: '附件管理',
          handler: 'onAttachmentManage'
        }
      ]
    }
  ],
  plugins: [{
    ptype: 'rowexpander',
    rowBodyTpl: new Ext.XTemplate(
      '<p><b>内容:</b> {content}</p>',
      {
        formatChange: function (v) {
          var color = v >= 0 ? 'green' : 'red';
          return '<span style="color: ' + color + ';">' + Ext.util.Format.usMoney(v) + '</span>';
        }
      })
  }],
  collapsible: true,
  animCollapse: true,
});
