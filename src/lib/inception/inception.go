package inception

import (
	"Yearning-go/src/lib"
	"Yearning-go/src/model"
	pb "Yearning-go/src/proto"
	"encoding/json"
	"fmt"
	"github.com/jinzhu/gorm"
	_ "gorm.io/driver/mysql"
	"log"
	"reflect"
	"regexp"
)

type Result struct {
	OrderId      int
	Stage        string
	ErrorLevel   int32
	StageStatus  string
	ErrorMessage string
	Sql          string
	AffectRows   int32
	Sequence     string
	BackupDbname string
	ExecuteTime  string
	Sqlsha1      string
	BackupTime   int
}

type yearningConfig struct {
	AllowCreatePartition           bool    `json:"AllowCreatePartition"`
	AllowCreateView                bool    `json:"AllowCreateView"`
	AllowSpecialType               bool    `json:"AllowSpecialType"`
	CheckIdentifier                bool    `json:"CheckIdentifier"`
	DDLEnableSetCharset            bool    `json:"DDLEnableSetCharset"`
	DDLCheckTimestampCount         bool    `json:"DDLCheckTimestampCount"`
	DDLAllowChangeColumnPosition   bool    `json:"DDLAllowChangeColumnPosition"`
	DDLAllowColumnType             bool    `json:"DDLAllowColumnType"`
	DDLAllowPRINotInt              bool    `json:"DDLAllowPRINotInt"`
	DDLCheckColumnDefault          bool    `json:"DDLCheckColumnDefault"`
	DDLCheckColumnNullable         bool    `json:"DDLCheckColumnNullable"`
	DDLCheckFloatDouble            bool    `json:"DDLCheckFloatDouble"`
	DDLCheckTableComment           bool    `json:"DDLCheckTableComment"`
	DDLColumnsMustHaveIndex        string  `json:"DDLColumnsMustHaveIndex"`
	DDLEnableAcrossDBRename        bool    `json:"DDLEnableAcrossDBRename"`
	DDLEnableAutoIncrement         bool    `json:"DDLEnableAutoIncrement"`
	DDLEnableAutoincrementInit     bool    `json:"DDLEnableAutoincrementInit"`
	DDLEnableAutoincrementUnsigned bool    `json:"DDLEnableAutoincrementUnsigned"`
	DDLEnableDropDatabase          bool    `json:"DDLEnableDropDatabase"`
	DDLEnableDropTable             bool    `json:"DDLEnableDropTable"`
	DDLEnableNullIndexName         bool    `json:"DDLEnableNullIndexName"`
	DDLImplicitTypeConversion      bool    `json:"DDLImplicitTypeConversion"`
	DDLIndexNameSpec               bool    `json:"DDLIndexNameSpec"`
	DDLMaxCharLength               int64   `json:"DDLMaxCharLength"`
	DDLMaxKey                      int64   `json:"DDLMaxKey"`
	DDLMaxKeyParts                 int64   `json:"DDLMaxKeyParts"`
	DDLMultiToSubmit               bool    `json:"DDLMultiToSubmit"`
	DDLPrimaryKeyMust              bool    `json:"DDLPrimaryKeyMust"`
	DDlCheckColumnComment          bool    `json:"DDlCheckColumnComment"`
	DMLInsertColumns               bool    `json:"DMLInsertColumns"`
	DMLMaxInsertRows               int64   `json:"DMLMaxInsertRows"`
	DMLOrder                       bool    `json:"DMLOrder"`
	DMLSelect                      bool    `json:"DMLSelect"`
	DMLWhere                       bool    `json:"DMLWhere"`
	IsOSC                          bool    `json:"IsOSC"`
	MaxAffectRows                  int64   `json:"MaxAffectRows"`
	MaxDDLAffectRows               int64   `json:"MaxDDLAffectRows"`
	MaxTableNameLen                int64   `json:"MaxTableNameLen"`
	MustHaveColumns                string  `json:"MustHaveColumns"`
	OscAlterForeignKeysMethod      string  `json:"OscAlterForeignKeysMethod"`
	OscBinDir                      string  `json:"OscBinDir"`
	OscCheckAlter                  bool    `json:"OscCheckAlter"`
	OscCheckInterval               int64   `json:"OscCheckInterval"`
	OscCheckReplicationFilters     bool    `json:"OscCheckReplicationFilters"`
	OscCheckUniqueKeyChange        bool    `json:"OscCheckUniqueKeyChange"`
	OscChunkTime                   float64 `json:"OscChunkTime"`
	OscCriticalThreadConnected     int64   `json:"OscCriticalThreadConnected"`
	OscCriticalThreadRunning       int64   `json:"OscCriticalThreadRunning"`
	OscDropNewTable                bool    `json:"OscDropNewTable"`
	OscDropOldTable                bool    `json:"OscDropOldTable"`
	OscLockWaitTimeout             int64   `json:"OscLockWaitTimeout"`
	OscMaxLag                      int64   `json:"OscMaxLag"`
	OscMaxThreadConnected          int64   `json:"OscMaxThreadConnected"`
	OscMaxThreadRunning            int64   `json:"OscMaxThreadRunning"`
	OscPrintSql                    bool    `json:"OscPrintSql"`
	OscRecursionMethod             string  `json:"OscRecursionMethod"`
	OscSize                        int64   `json:"OscSize"`
	OscSleep                       int64   `json:"OscSleep"`
	PRIRollBackErr                 bool    `json:"PRIRollBackErr"`
	SupportCharset                 string  `json:"SupportCharset"`
	SupportCollation               string  `json:"SupportCollation"`
}

// inception config
type icConfig struct {
	OscOn                       bool    `json:"IsOSC" map:"osc_on"`
	OscMinTableSize             int64   `json:"OscSize" map:"osc_min_table_size"`
	CheckDmlOrderBy             bool    `json:"DMLOrder" map:"check_dml_orderby"`
	CheckDmlWhere               bool    `json:"DMLWhere" map:"check_dml_where"`
	EnableSetCharset            bool    `json:"DDLEnableSetCharset" map:"enable_set_charset"`
	CheckTimestampCount         bool    `json:"CheckTimestampCount" map:"check_timestamp_count"`
	MaxKeys                     int64   `json:"DDLMaxKey" map:"max_keys"`
	EnableSelectStar            bool    `json:"DMLSelect" map:"enable_select_star"`
	OscBinDir                   string  `json:"OscBinDir" map:"osc_bin_dir"`
	OscMaxLag                   int64   `json:"OscMaxLag" map:"osc_max_lag"`
	OscPrintSql                 bool    `json:"OscPrintSql" map:"osc_print_sql"`
	OscChunkTime                float64 `json:"OscChunkTime" map:"osc_chunk_time"`
	MaxDdlAffectRows            int64   `json:"MaxDdlAffectRows" map:"max_ddl_affect_rows"`
	OscCheckAlter               bool    `json:"OscCheckAlter" map:"osc_check_alter"`
	MaxKeyParts                 int64   `json:"DDLMaxKeyParts" map:"max_key_parts"`
	SupportCharset              string  `json:"SupportCharset" map:"support_charset"`
	EnableUseView               bool    `json:"AllowCreateView" map:"enable_use_view"`
	CheckIdentifier             bool    `json:"CheckIdentifier" map:"check_identifier"`
	MustHaveColumns             string  `json:"MustHaveColumns" map:"must_have_columns"`
	OscDropNewTable             bool    `json:"OscDropNewTable" map:"osc_drop_new_table"`
	OscDropOldTable             bool    `json:"OscDropOldTable" map:"osc_drop_old_table"`
	EnableEnumSetBit            bool    `json:"AllowSpecialType" map:"enable_enum_set_bit"`
	IndexPrefix                 bool    `json:"DDLIndexNameSpec" map:"index_prefix"`
	MaxCharLength               int64   `json:"DDLMaxCharLength" map:"max_char_length"`
	CheckInsertField            bool    `json:"DMLInsertColumns" map:"check_insert_field"`
	MaxInsertRows               int64   `json:"DMLMaxInsertRows" map:"max_insert_rows"`
	OscCheckInterval            int64   `json:"OscCheckInterval" map:"osc_check_interval"`
	SupportCollation            string  `json:"SupportCollation" map:"support_collation"`
	CheckAutoincrementName      bool    `json:"DDLPrimaryKeyMust" map:"check_auto_increment_name"`
	CheckColumnTypeChange       bool    `json:"DDLAllowColumnType" map:"check_column_type_change"`
	EnableDropTable             bool    `json:"DDLEnableDropTable" map:"enable_drop_table"`
	OscLockWaitTimeout          int64   `json:"OscLockWaitTimeout" map:"osc_lock_wait_timeout"`
	OscRecursionMethod          string  `json:"OscRecursionMethod" map:"osc_recursion_method"`
	CheckFloatDouble            bool    `json:"DDLCheckFloatDouble" map:"check_float_double"`
	OscMaxThreadRunning         int64   `json:"OscMaxThreadRunning" map:"osc_max_thread_running"`
	EnablePartitionTable        bool    `json:"AllowCreatePartition" map:"enable_partition_table"`
	CheckTableComment           bool    `json:"DDLCheckTableComment" map:"check_table_comment"`
	CheckColumnDefaultValue     bool    `json:"DDLCheckColumnDefault" map:"check_column_default_value"`
	EnableDropDatabase          bool    `json:"DDLEnableDropDatabase" map:"enable_drop_database"`
	CheckColumnComment          bool    `json:"DDLCheckColumnComment" map:"check_column_comment"`
	OscMaxThreadConnected       int64   `json:"OscMaxThreadConnected" map:"osc_max_thread_connected"`
	EnableNullable              bool    `json:"DDLCheckColumnNullable" map:"enable_nullable"`
	EnableNullIndexName         bool    `json:"DDLEnableNullIndexName" map:"enable_null_index_name"`
	OscCheckUniqueKeyChange     bool    `json:"OscCheckUniqueKeyChange" map:"osc_check_unique_key_change"`
	OscCriticalThreadRunning    int64   `json:"OscCriticalThreadRunning" map:"osc_critical_thread_running"`
	CheckImplicitTypeConversion bool    `json:"DDLImplicitTypeConversion" map:"osc_check_implicit_type_conversion"`
	OscAlterForeignKeysMethod   string  `json:"OscAlterForeignKeysMethod" map:"osc_alter_foreign_keys_method"`
	CheckAutoincrementInitValue bool    `json:"DDLEnableAutoincrementInit" map:"check_autoincrement_init_value"`
	OscCheckReplicationFilters  bool    `json:"OscCheckReplicationFilters" map:"osc_check_replication_filters"`
	OscCriticalThreadConnected  int64   `json:"OscCriticalThreadConnected" map:"osc_critical_thread_connected"`
	CheckColumnPositionChange   bool    `json:"DDLAllowChangeColumnPosition" map:"check_column_position_change"`
	EnableAutoincrementUnsigned bool    `json:"DDLEnableAutoIncrementUnsigned" map:"enable_autoincrement_unsigned"`
}

func StructToMapReflect(in interface{}, tagName string) (map[string]interface{}, error) {
	out := make(map[string]interface{})

	v := reflect.ValueOf(in)
	if v.Kind() == reflect.Ptr {
		v = v.Elem()
	}

	if v.Kind() != reflect.Struct { // 非结构体返回错误提示
		return nil, fmt.Errorf("ToMap only accepts struct or struct pointer; got %T", v)
	}

	t := v.Type()
	// 遍历结构体字段
	// 指定tagName值为map中key;字段值为map中value
	for i := 0; i < v.NumField(); i++ {
		fi := t.Field(i)
		tagValue := fi.Tag.Get(tagName)
		if tagValue != "" {
			out[tagValue] = v.Field(i).Interface()
		}
	}
	return out, nil
}

func checkSql(source *pb.Source, dbName, sqlStr string) ([]Result, error) {
	db, err := gorm.Open("mysql",
		fmt.Sprintf("%s:%s@tcp(%s:%d)/",
			model.C.GoInception.User,
			model.C.GoInception.Password,
			model.C.GoInception.Host,
			model.C.GoInception.Port,
		),
	)
	if err != nil {
		return nil, err
	}

	defer db.Close()

	var result []Result

	str := fmt.Sprintf(
		`/*--user=%s;--password=%s;--host=%s;--port=%d;--check=1;*/
inception_magic_start;
use %s;
%s
inception_magic_commit;`,
		source.User,
		source.Password,
		source.Addr,
		source.Port,
		dbName,
		sqlStr,
	)
	db.Raw(str).Scan(&result)

	return result, nil
}

func executeSql(source *pb.Source, dbName, sqlStr string, backup bool) ([]Result, error) {
	db, err := gorm.Open("mysql",
		fmt.Sprintf("%s:%s@tcp(%s:%d)/",
			model.C.GoInception.User,
			model.C.GoInception.Password,
			model.C.GoInception.Host,
			model.C.GoInception.Port,
		),
	)
	if err != nil {
		return nil, err
	}

	defer db.Close()

	var result []Result

	str := fmt.Sprintf(
		`/*--user=%s;--password=%s;--host=%s;--port=%d;--execute=1;--backup=%t;--ignore-warnings=1;--trans=100;*/
inception_magic_start;
use %s;
%s
inception_magic_commit;`,
		source.User,
		source.Password,
		source.Addr,
		source.Port,
		backup,
		dbName,
		sqlStr,
	)
	db.Raw(str).Scan(&result)

	return result, nil
}

func TsClient(order *pb.LibraAuditOrder) ([]*pb.Record, error) {
	var list []*pb.Record

	tmp, err := checkSql(order.Source, order.DataBase, order.SQL)
	if err != nil {
		return nil, err
	}

	for _, v := range tmp {
		matched, err := regexp.MatchString(`^(use)\s(\d|\w|\_)+$`, v.Sql)
		if err != nil || matched {
			continue
		}

		list = append(list, &pb.Record{
			SQL:        v.Sql,
			AffectRows: v.AffectRows,
			Status:     v.StageStatus,
			Error:      v.ErrorMessage,
			Level:      v.ErrorLevel,
		})
	}

	return list, nil
}

// ddl操作   表
func ExDDLClient(order *pb.LibraAuditOrder) {
	_, err := executeSql(order.Source, order.DataBase, order.SQL, order.Backup)
	if err != nil {
		log.Printf("execute query error: %+v", err)
		model.DB().Model(&model.CoreSqlOrder{}).Where("work_id =?", order.WorkId).Updates(map[string]interface{}{"status": 4})
		lib.MessagePush(order.WorkId, 4, "")
		return
	}

	model.DB().Model(&model.CoreSqlOrder{}).Where("work_id =?", order.WorkId).Updates(map[string]interface{}{"status": 1})
	lib.MessagePush(order.WorkId, 1, "")
}

// dml操作   行
func ExDMLClient(order *pb.LibraAuditOrder) {
	_, err := executeSql(order.Source, order.DataBase, order.SQL, order.Backup)
	if err != nil {
		log.Printf("execute query error: %+v", err)
		model.DB().Model(&model.CoreSqlOrder{}).Where("work_id =?", order.WorkId).Updates(map[string]interface{}{"status": 4})
		lib.MessagePush(order.WorkId, 4, "")
		return
	}

	model.DB().Model(&model.CoreSqlOrder{}).Where("work_id =?", order.WorkId).Updates(map[string]interface{}{"status": 1})
	lib.MessagePush(order.WorkId, 1, "")
}

// dcl操作   对象   目前GoInception不支持, 需要自行实现
func ExDCLClient(order string) {

}

func ExKillOsc(order *pb.LibraAuditOrder) *pb.Isok {
	return nil
}

func OverrideConfig(order *pb.LibraAuditOrder) *pb.Isok {
	var (
		conf    model.CoreGlobalConfiguration
		newConf icConfig
		oldConf icConfig
	)
	model.DB().Model(model.CoreGlobalConfiguration{}).Find(&conf)
	if err := json.Unmarshal(conf.AuditRole, &newConf); err != nil {
		return &pb.Isok{Ok: false}
	}

	confList, err := getInceptionConfigList()
	if err != nil {
		return &pb.Isok{Ok: false}
	}

	b, err := json.Marshal(confList)
	if err != nil {
		return &pb.Isok{Ok: false}
	}

	err = json.Unmarshal(b, &oldConf)
	if err != nil {
		return &pb.Isok{Ok: false}
	}

	v1 := reflect.ValueOf(newConf)
	v2 := reflect.ValueOf(oldConf)
	t := v1.Type()
	for i := 0; i < v1.NumField(); i++ {
		if v1.Field(i).Interface() != v2.Field(i).Interface() {
			ruleName := t.Field(i).Tag.Get("map")
			err = setInceptionConfig(ruleName, v1.Field(i).Interface())
			if err != nil {
				return &pb.Isok{Ok: false}
			}
		}
	}

	return &pb.Isok{Ok: true}
}

type inceptionConfig struct {
	VariableName string      `gorm:"column:Variable_name"`
	Value        interface{} `gorm:"column:Value"`
}

func getInceptionConfigList() (map[string]string, error) {
	connConf := fmt.Sprintf("%s:%s@tcp(%s:%d)/",
		model.C.GoInception.User,
		model.C.GoInception.Password,
		model.C.GoInception.Host,
		model.C.GoInception.Port,
	)
	db, err := gorm.Open("mysql", connConf)

	if err != nil {
		return nil, err
	}

	defer db.Close()

	var inceptionConfList []inceptionConfig
	db.Raw("inception show variables").Scan(&inceptionConfList)

	m := make(map[string]string)
	for _, v := range inceptionConfList {
		if len(v.Value.([]byte)) == 0 {
			continue
		}
		m[v.VariableName] = fmt.Sprintf("%s", v.Value)
	}

	return m, nil
}

func setInceptionConfig(rule string, value interface{}) error {
	connConf := fmt.Sprintf("%s:%s@tcp(%s:%d)/",
		model.C.GoInception.User,
		model.C.GoInception.Password,
		model.C.GoInception.Host,
		model.C.GoInception.Port,
	)
	db, err := gorm.Open("mysql", connConf)

	if err != nil {
		return err
	}

	defer db.Close()

	str := fmt.Sprintf("inception set %s = %v", rule, value)
	db.Exec(str)

	return nil
}

func ExAutoTask(order *pb.LibraAuditOrder) bool {

	return false
}
