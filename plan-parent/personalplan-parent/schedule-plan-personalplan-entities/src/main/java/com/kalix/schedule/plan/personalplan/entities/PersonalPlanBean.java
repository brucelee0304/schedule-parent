package com.kalix.schedule.plan.personalplan.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.kalix.framework.core.api.persistence.PersistentEntity;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;

/**
 * @类描述：
 * @创建人：
 * @创建时间：
 * @修改人：
 * @修改时间：
 * @修改备注：
 */
 //todo 修改模型定义
@Entity
@Table(name = "schedule_personalplan")
public class PersonalPlanBean extends PersistentEntity {
    	/**
    	*@describe 用户id
    	*/
    	private long userId;
    	/**
    	*@describe 用户名
    	*/
    	private String userName;
    	/**
    	*@describe 部门id
    	*/
    	private long departmentId;
    	/**
    	*@describe 部门名
    	*/
    	private String departmentName;
    	/**
    	*@describe 标题
    	*/
    	private String title;
    	/**
    	*@describe 内容
    	*/
    	private String content;
    	/**
    	*@describe 计划类型
    	*/
    	private String planType;
    	/**
    	*@describe 计划状态
    	*/
    	private String state;
    	/**
    	*@describe 开始日期
    	*/
    @JsonFormat(shape= JsonFormat.Shape.STRING ,pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    	private Date beginDate;
    	/**
    	*@describe 结束日期
    	*/
    @JsonFormat(shape= JsonFormat.Shape.STRING ,pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    	private Date endDate;
    	public long getUserId(){
    		return this.userId;
    	}

    	public void setUserId(long userId) {
    		this.userId = userId;
    	}

    	public String getUserName(){
    		return this.userName;
    	}

    	public void setUserName(String userName) {
    		this.userName = userName;
    	}

    	public long getDepartmentId(){
    		return this.departmentId;
    	}

    	public void setDepartmentId(long departmentId) {
    		this.departmentId = departmentId;
    	}

    	public String getDepartmentName(){
    		return this.departmentName;
    	}

    	public void setDepartmentName(String departmentName) {
    		this.departmentName = departmentName;
    	}

    	public String getTitle(){
    		return this.title;
    	}

    	public void setTitle(String title) {
    		this.title = title;
    	}

    	public String getContent(){
    		return this.content;
    	}

    	public void setContent(String content) {
    		this.content = content;
    	}

    	public String getPlanType(){
    		return this.planType;
    	}

    	public void setPlanType(String planType) {
    		this.planType = planType;
    	}

    	public String getState(){
    		return this.state;
    	}

    	public void setState(String state) {
    		this.state = state;
    	}

    	public Date getBeginDate(){
    		return this.beginDate;
    	}

    	public void setBeginDate(Date beginDate) {
    		this.beginDate = beginDate;
    	}

    	public Date getEndDate(){
    		return this.endDate;
    	}

    	public void setEndDate(Date endDate) {
    		this.endDate = endDate;
    	}


}
