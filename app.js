var calc_val = 0;
var value_for_calc = 0;
var calc_opn = '';


function ReadInputNumber(input_value)
{
    var ip_num = document.getElementById("calc-input");

    if (input_value.charCodeAt(0) >= 48 && input_value.charCodeAt(0) <= 57)
    {
        if(value_for_calc == 1)
        {
            ip_num.value = "";
            value_for_calc = 2;
        }    
        ip_num.value += input_value;
    }

    if (input_value == '.' && ip_num.value.indexOf('.') == -1)
    {
        ip_num.value += input_value;
    }
    
    switch (input_value)
    {
        case '-1':
            if(ip_num.value.length > 0)
            {
                if(ip_num.value.indexOf('-') != -1)
                {
                    ip_num.value = ip_num.value.slice(1);
                }
                else
                {
                    ip_num.value = "-" + ip_num.value;
                }
            }
            break;
        case '-2':
            ip_num.value = ip_num.value.slice(0 , ip_num.value.length - 1);
            break;
        case '-3':
            ip_num.value = "";
            calc_val = 0; 
            value_for_calc = 0;
            calc_opn = '';           
            break;
        case '-4':
            ip_num.value = "";
            break;
        case '-5':
            CalculateResult(Number(ip_num.value) , '-5');
            ip_num.value = calc_val.toString(); 
            break;                    
        case '-6':
            CalculateResult(Number(ip_num.value) , '-6');
            ip_num.value = calc_val.toString(); 
            break;                    
        case '-7':
            CalculateResult(Number(ip_num.value) , '-7');
            ip_num.value = calc_val.toString(); 
            break;                    
        case '-8':
            CalculateResult(Number(ip_num.value) , '-8');
            ip_num.value = var_for_perc.toString();
            value_for_calc = 2; 
            break;      
        case '+':
            CalculateResult(Number(ip_num.value) , '+');
            ip_num.value = calc_val.toString(); 
            break;
        case '-':
            CalculateResult(Number(ip_num.value) , '-');
            ip_num.value = calc_val.toString(); 
            break;
        case '*':
            CalculateResult(Number(ip_num.value) , '*');
            ip_num.value = calc_val.toString(); 
            break;
        case '/':
            CalculateResult(Number(ip_num.value) , '/');
            ip_num.value = calc_val.toString(); 
            break;
        case '=':
            CalculateResult(Number(ip_num.value) , '=');
            ip_num.value = calc_val.toString(); 
            break;                    
    }
}

function CalculateResult(number_input , opn_input) 
{  
    if(opn_input != '-8')
    {
        if(value_for_calc == 0)
        {
            calc_val = number_input;
        }
        else
        {
            switch (calc_opn)
            {
                case '+':
                    calc_val = calc_val + number_input;
                    break;
                case '-':
                    calc_val -= number_input;
                    break;
                case '*':
                    calc_val *= number_input;
                    break;
                case '/':
                    calc_val /= number_input;
                    break;
                case '=':
                    calc_val = number_input;
                    break;
            }
        }
    }

    switch (opn_input)
    {
        case '-5':
            calc_val = 1/number_input;
            break;        
        case '-6':
            calc_val = number_input * number_input
            break;
        case '-7':
            calc_val = Math.sqrt(number_input)
            break;
        case '-8':
            opn_input = calc_opn;
            console.log(` ${calc_val} ${number_input}`);
            var_for_perc = (calc_val * number_input) / 100;
            console.log(`${var_for_perc}`);
            break;                
        }
    calc_opn = opn_input;
    value_for_calc = 1;
}