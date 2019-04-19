
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2019-04-12 16:04:56
 * @version $Id$
 */
 	// inputedit.main(".editArea","试卷标题","798px",'<span class="nunArea"><em class="currentNum">1</em>/<em class="totalNum">30</em></span>',function(o)
require(["jquery","inputE"],function($,inputE){
   inputE.main(".wrap","试卷标题","120px",'<span class="nunArea"><em class="currentNum">1</em>/<em class="totalNum">15</em></span>',function(o){
       alert(o.text());
   })
})
