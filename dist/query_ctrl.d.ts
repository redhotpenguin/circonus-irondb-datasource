/// <reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />
import IrondbQuery from './irondb_query';
import { QueryCtrl } from 'app/plugins/sdk';
export declare class IrondbQueryCtrl extends QueryCtrl {
    private uiSegmentSrv;
    private templateSrv;
    static templateUrl: string;
    defaults: {};
    queryModel: IrondbQuery;
    segments: any[];
    /** @ngInject **/
    constructor($scope: any, $injector: any, uiSegmentSrv: any, templateSrv: any);
    getOptions(query: any): any;
    toggleEditorMode(): void;
    switchCaql(): void;
    onChangeInternal(): void;
    getCollapsedText(): any;
    getSegments(index: any, prefix: any): any;
    parseTarget(): void;
    buildSegments(): void;
    addSelectMetricSegment(): void;
    checkOtherSegments(fromIndex: any): any;
    setSegmentFocus(segmentIndex: any): void;
    segmentValueChanged(segment: any, segmentIndex: any): any;
    spliceSegments(index: any): void;
    emptySegments(): void;
    updateModelTarget(): void;
    targetChanged(): void;
    showDelimiter(index: any): boolean;
    escapeRegExp(regexp: any): string;
}
