/**
 * 修改任务负责人新增和修改表单
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.task.assignment.view.ProgressWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.controller.BaseWindowController'
    ],
    alias: 'widget.progressWindow',
    controller: {
        type: 'baseWindowController'
    },
    xtype: "progressWindow",
    width: 400,
    //todo 在此修改表单
    items: [
        {
            xtype: 'baseForm',
            items: [
                //{
                //    fieldLabel: '任务进度(%)',
                //    allowBlank: false,
                //    xtype: 'numberfield',
                //    maxValue: 100,
                //    minValue: 0,
                //    listeners: {
                //        'afterrender': function(target,eOpts){
                //            target.value = this.lookupViewModel().get('rec').get('percent')*100;
                //        },
                //        'change': function (target, newValue, oldValue, eOpts) {
                //            this.lookupViewModel().get('rec').set('percent', newValue/100);
                //        }
                //    }
                //},
                {
                    fieldLabel: '任务进度(%)',
                    allowBlank: false,
                    xtype: 'numberfield',
                    maxValue: 100,
                    minValue: 0,
                    value: 0,
                    bind: {
                        value: '{rec.percent}'
                    }//,
                    //getValue:function(){
                    //    return this.value*100;
                    //}
                    //,
                    //setValue: function (value) {
                    //    this.value=value/100;
                    //}
                },
                {
                    fieldLabel: '进度说明',
                    allowBlank: false,
                    xtype: 'textarea',
                    value: '',
                    bind: {
                        value: '{rec.comment}'
                    }
                }
            ]
        }
    ]
})
;