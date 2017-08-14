<template>
    <div class="bar">
        <div class="progress">
            <div class="progress-bar progress-bar-striped" role="progressbar" :style="{width: progress*100 + '%'}"></div>
        </div>
        <div class="progress-number">{{current}}/{{total}}</div>
    </div>
</template>
<script lang="ts" src="./Bar.ts"></script>
<<style lang="less">
    .bar{
        margin:5px 10px;
        display:flex;
        align-items: center;
        // width:100%;
        .progress{
            flex-grow:1;
        }
        .progress-number{
            margin-left: 10px;
        }
    }
</style>
