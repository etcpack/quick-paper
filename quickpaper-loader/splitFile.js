
// 把完整的.paper文件切割成三份

/**
 * .paper文件格式
 *
 * <template>
 *  <ui-demo />
 * </template>
 * <script>
 *  export default {
 *
 *  };
 * </script>
 * <style>
 *  ui-demo{
 *  width:100px;
 *  height:300px;
 * }
 * </style>
 *
 * 变成：
 *
 * {
 *  template:”<ui-demo />”,
 *  script:"export default {};”,
 *  style:"ui-demo{width:100px;height:300px;}"
 * };
 */

const tool = require('@hai2007/tool');

module.exports = function splitFile(source) {

  let resultData = {
    template: "",
    script: "",
    style: ""
  };

  // 获取字符串操作对象
  let reader = tool.ReadString(source);

  let currentChar = reader.readNext();
  while (true) {

    if (reader.index >= source.length) break;

    // 如果是template开头
    if (reader.getNextN(10) == '<template>') {

      do {
        resultData.template += currentChar;
        currentChar = reader.readNext();
      } while (reader.getNextN(11) != '</template>');

      resultData.template = resultData.template.replace(/^<template>/, '')
    }

    // 如果是script开头
    else if (reader.getNextN(8) == '<script>') {

      do {
        resultData.script += currentChar;
        currentChar = reader.readNext();
      } while (reader.getNextN(9) != '</script>');

      resultData.script = resultData.script.replace(/^<script>/, '')
    }

    // 如果是style开头
    else if (reader.getNextN(7) == '<style>') {

      do {
        resultData.style += currentChar;
        currentChar = reader.readNext();
      } while (reader.getNextN(8) != '</style>');

      resultData.style = resultData.style.replace(/^<style>/, '');
    }

    // 否则
    else {
      reader.readNext();
    }

  }

  return resultData;
};
