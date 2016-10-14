
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'project/css/main.css': 'project/css/main.less'
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'project/css/main.min.css': ['project/css/main.css']
                }
            }
        }
    });

    // 加载包含 "uglify" 任务的插件。
    grunt.loadNpmTasks("grunt-contrib-cssmin");

    // 默认被执行的任务列表。
    grunt.registerTask('default', ["cssmin"]);

};